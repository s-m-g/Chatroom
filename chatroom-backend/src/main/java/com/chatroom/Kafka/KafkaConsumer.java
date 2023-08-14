package com.chatroom.Kafka;

import com.chatroom.model.MessageEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class KafkaConsumer {

    private static final Logger LOGGER = LoggerFactory.getLogger(KafkaProducer.class);

    @KafkaListener(topics="chatRoom",
                    groupId = "group-id"
    )
    public void listenFromBroker(MessageEvent event){
        LOGGER.info(String.format("message received from broker: %s",event.toString()));
    }
}
