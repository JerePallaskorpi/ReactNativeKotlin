package com.example.demo.model

import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.Table

/** Message table */
object Messages : Table() {
    val id: Column<Int> = integer("id").autoIncrement().primaryKey()
    val message: Column<String> = varchar("message", 200)
}
