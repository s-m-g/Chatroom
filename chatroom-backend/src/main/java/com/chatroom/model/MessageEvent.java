package com.chatroom.model;

public class MessageEvent {

    private String user;
    private String message;
    public void setUser(String user) {
        this.user = user;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getUser() {
        return user;
    }

    public String getMessage() {
        return message;
    }

    @Override
    public String toString() {
        return "MessageEvent{" +
                "user='" + user + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
