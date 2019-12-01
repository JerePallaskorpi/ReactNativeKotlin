package com.example.demo.controller

import com.example.demo.model.Message
import com.example.demo.service.MessageService
import org.springframework.web.bind.annotation.*
import org.springframework.web.bind.annotation.RestController

/**
 * Rest controller for handling all message related requests.
 */
@RestController
class RestController(
        val messageService: MessageService
) {

    /**
     * Controller for getting all the messages.
     * 
     * @return List of messages.
     */
    @GetMapping(value = ["/api/message"])
    fun getMessages(): List<Message> {
        return messageService.getMessages()
    }

    /**
     * Controller for adding a message.
     * 
     * @param message Message to be added to the database.
     * @return List of messages.
     */
    @PostMapping(value = ["/api/message"])
    fun addMessage(@RequestBody message: String): List<Message> {
        return messageService.addMessage(message)
    }

    /**
     * Controller for deleting a message.
     * 
     * @param message Message object containing id used for deleting message from the database.
     * @return List of messages.
     */
    @DeleteMapping(value = ["/api/message"])
    fun deleteMessage(@RequestBody message: Message): List<Message> {
        return messageService.deleteMessage(message)
    }
}


