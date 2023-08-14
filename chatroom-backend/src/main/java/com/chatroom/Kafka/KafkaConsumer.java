package com.chatroom.Kafka;

import com.chatroom.model.MessageEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class KafkaConsumer {

    private static final Logger LOGGER = LoggerFactory.getLogger(KafkaProducer.class);

    @Autowired
    SimpMessagingTemplate template;

    @KafkaListener(topics="chatRoom",
                    groupId = "group-id"
    )
    public void listenFromBroker(MessageEvent event){
        LOGGER.info(String.format("message received from broker: %s",event.toString()));
        // here we can send the received msg to WebSocket broker's topic,
        // from where it will be broadcasted

        template.convertAndSend("/topic/chatRoomAllMessages", event);
        LOGGER.info("message sent to Web Socket broker");
    }
}
