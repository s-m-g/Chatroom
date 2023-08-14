package com.chatroom.Kafka;

import com.chatroom.model.MessageEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducer {

    private static final Logger LOGGER = LoggerFactory.getLogger(KafkaProducer.class);

    @Autowired
    KafkaTemplate<String, MessageEvent> kafkaTemplate;

    public void sendEventToBroker(MessageEvent messageEvent){
        kafkaTemplate.send("chatRoom", messageEvent);
        LOGGER.info(String.format("Message sent to topic-%s: %s", "chatRoom", messageEvent.toString()));
    }
}
