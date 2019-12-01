package com.example.demo.service

import com.example.demo.dao.MessageDao
import com.example.demo.model.Message
import org.springframework.stereotype.Service

/**
 * Service for handling all message related logic.
 */
@Service
class MessageService(
        private val messageDao: MessageDao
) {

    /**
     * Gets messages from the database.
     * 
     * @return List of messages.  
     */
    fun getMessages(): List<Message> {
        return messageDao.getMessage()
    }

    /**
     * Adds a message to the database.
     *
     * @return List of messages.
     */
    fun addMessage(message: String): List<Message> {
        messageDao.addMessage(message)
        return getMessages()
    }

    /**
     * Deletes a message from the database.
     * 
     * @return List of messages.
     */
    fun deleteMessage(message: Message): List<Message> {
        messageDao.deleteMessage(message)
        return getMessages()
    } 
}
