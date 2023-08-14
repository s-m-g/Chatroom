package com.chatroom.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // send request here to make connection with websocket
        registry.addEndpoint("/connectToWebSocket");
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        // create an in-memory broker
        registry.enableSimpleBroker("/topic");
        // provide a prefix which is added to your url which receives a message
        // not of much importance in our case, as we all-ready have msg from Kafka Consumer
        registry.setApplicationDestinationPrefixes("/app");
    }
}
