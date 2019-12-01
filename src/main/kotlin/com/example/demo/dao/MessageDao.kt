package com.example.demo.dao

import com.example.demo.model.Message
import com.example.demo.model.Messages
import org.jetbrains.exposed.sql.deleteWhere
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.stereotype.Component


/**
 * DAO for handling all message related queries.
 */
@Component
class MessageDao(
        val databaseDao: DatabaseDao
) {

    /**
     * Get messages from the database.
     * 
     * @return List of messages.
     */
    fun getMessage(): List<Message> {
        databaseDao.connectToDatabase()
        
        var messages = listOf<Message>()
        transaction {
            messages = Messages.selectAll().map { Message(
                    it[Messages.id],
                    it[Messages.message]
            ) }
        }
        
        return messages
    }

    /**
     * Add message to the database.
     * 
     * @param msg Message to be added.
     */
    fun addMessage(msg: String) {
        databaseDao.connectToDatabase()
        
        transaction {
            Messages.insert {
                it[message] = msg
            }
        }
    }

    /**
     * Delete message from the database.
     * 
     * @param message Message to be deleted from the database.
     */
    fun deleteMessage(message: Message) {
        databaseDao.connectToDatabase()
        
        transaction {
            Messages.deleteWhere { Messages.id eq message.id.toInt() }
        }
    }
}
