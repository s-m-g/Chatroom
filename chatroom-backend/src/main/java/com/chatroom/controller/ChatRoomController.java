package com.chatroom.controller;

import com.chatroom.Kafka.KafkaProducer;
import com.chatroom.model.MessageEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chatroom")
@CrossOrigin(origins = "http://localhost:4200")
public class ChatRoomController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ChatRoomController.class);

    @Autowired
    private KafkaProducer kafkaProducer;

    @PostMapping("/publish")
    public ResponseEntity<String> publishMessage(@RequestBody MessageEvent messageEvent){
        kafkaProducer.sendEventToBroker(messageEvent);
        return ResponseEntity.ok("Message published !");
    }

    @GetMapping("/test")
    public ResponseEntity<String> testEndPoint(){
        return ResponseEntity.ok("Endpoint working !");
    }
}
