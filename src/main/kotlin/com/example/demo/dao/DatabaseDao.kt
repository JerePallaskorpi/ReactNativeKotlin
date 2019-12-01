package com.example.demo.dao

import com.example.demo.config.AppProperties
import org.jetbrains.exposed.sql.Database
import org.springframework.stereotype.Component

/**
 * DAO for general database connections.
 */
@Component
class DatabaseDao(
        val appProperties: AppProperties
) {
    
    /**
     * Open a connection to the database.
     */
    fun connectToDatabase() {
        Database.connect(appProperties.datasourceUrl,
                driver = appProperties.datasourceDriver,
                user = appProperties.datasourceUsername,
                password = appProperties.datasourcePassword
        )
    }
}
