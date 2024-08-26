package com.example.demo.services;

import com.example.demo.entities.EmailDetails;

public interface EmailService {
	
	 // To send a simple email
	
	String sendSimpleMail(EmailDetails details);
    

    // To send an email with attachment
    String sendMailWithAttachment(EmailDetails details);
}

