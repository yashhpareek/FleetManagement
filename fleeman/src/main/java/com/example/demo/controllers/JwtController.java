package com.example.demo.controllers;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.jwt.CustomUserDetailsService;
import com.example.demo.jwt.JwtRepository;
import com.example.demo.jwt.JwtResponse;
import com.example.demo.jwt.JwtUtil;
import com.example.demo.jwt.MyUser;


@CrossOrigin
@RestController
public class JwtController 
{
	
	@Autowired
	private JwtUtil jwtutil;
	
	@Autowired
	private JwtRepository repository;
	
	@Autowired
	private CustomUserDetailsService customuserdetailsservice;
	
	@PostMapping("/public/token")
	public ResponseEntity<?> generateToken(@RequestBody MyUser myuser)
	{
		try
		{
		System.out.println("inside token method");
		System.out.println(myuser);
		boolean result=repository.findUser(myuser);
		if(result==false)
		{
			throw new UsernameNotFoundException("credentials don't match");
		}
		customuserdetailsservice.setPassword(myuser.getPassword());
		UserDetails userdetails=customuserdetailsservice.loadUserByUsername(myuser.getUsername());
		String token=this.jwtutil.generateToken(userdetails);
		System.out.println("JWT "+token);
		return ResponseEntity.ok(new JwtResponse(token));
		}
		catch(Exception ee)
		{
			ee.printStackTrace();
			return null;
		}
	}
}
