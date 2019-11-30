package com.example.demo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.beans.factory.annotation.Value
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody

@SpringBootApplication
class DemoApplication

fun main(args: Array<String>) {
    runApplication<DemoApplication>(*args)
}

object Messages : Table() {
    val id: Column<Int> = integer("id").autoIncrement().primaryKey()
    val message: Column<String> = varchar("message", 200)
}

@RestController
class RestController {
    @Value("\${spring.datasource.driver}")
    private var datasourceDriver: String = ""

    @Value("\${spring.datasource.url}")
    private var datasourceUrl: String = ""

    @Value("\${spring.datasource.username}")
    private var datasourceUsername: String = ""

    @Value("\${spring.datasource.password}")
    private var datasourcePassword: String = ""
    
    @GetMapping(value = ["/api/message"])
    fun getMessages(): List<Message> {
        var messages = listOf<Message>()
        
        Database.connect(datasourceUrl, 
                driver = datasourceDriver, 
                user = datasourceUsername,
                password = datasourcePassword
        )

        transaction {
            SchemaUtils.create(Messages)
        }
        
        transaction {
            messages = Messages.selectAll().map { Message(
                    it[Messages.id],
                    it[Messages.message]
            ) }
        }

        return messages
    }
    
    @PostMapping(value = ["/api/message"])
    fun addMessage(@RequestBody text: String): List<Message> {
        transaction {
            Messages.insert {
                it[message] = text
            }
        }
        
        return getMessages()
    }
}

data class Message (val id: Number, val message: String)
