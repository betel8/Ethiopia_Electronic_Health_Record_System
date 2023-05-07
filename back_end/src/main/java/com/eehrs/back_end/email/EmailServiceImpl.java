package com.eehrs.back_end.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender emailSender;
    
    @Override
    public void temporaryPasswordEmail(
      String to, String subject, CharSequence passwordValue) {
        MimeMessage mimeMessage = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
        String htmlMsg = "    <div style=\"margin-left: 10%;\">\r\n"
        		+ "        <div style=\"margin-left:5rem;display: block;padding:1rem; border-radius: 1rem;  border: 0.01rem solid #0067b8;width: fit-content;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';\">\r\n"
        		+ "            <h3 style=\"text-align: center;background-color: #0067b8;color: white; margin: 0;padding: 2rem; position: relative; \">\r\n"
        		+ "                EEHRS one time temporary password</h3>\r\n"
        		+ "                \r\n"
        		+ "                <div style=\"margin: 1rem;\" >\r\n"
        		+ "                    <p>welcome , we know this is your first so don't worry we will walk you \r\n"
        		+ "                        <br/>through start by copying temporary message we send you  </p>\r\n"
        		+ "                    <h4 style=\" font-weight: bold; background-color: black;padding: 1rem; padding: 0.5rem; color: rgb(131, 131, 131); margin: 1rem 3rem; text-align: center;\">"+passwordValue+"</h4>\r\n"
        		+ "                    <p>This password is for one time use only you will change the password <br/>\r\n"
        		+ "                        after you login so you dont need to remember the password. <br/> visit: <a style=\"text-decoration: none; color: #0067b8;\" href=\"http://localhost:3000/\">eehrs/login</a> to login</p>\r\n"
        		+ "                </div>\r\n"
        		+ "\r\n"
        		+ "                \r\n"
        		+ "        </div>\r\n"
        		+ "        <p style=\"color: grey;padding: 0rem 1rem;font-size: small;\">\r\n"
        		+ "            This email is sent by eehrs when new account is created to assist you set up your account for  use. \r\n"
        		+ "        </p>\r\n"
        		+ "    </div>";
        try {
			helper.setText(htmlMsg, true);
			helper.setTo(to);
	        helper.setSubject(subject);
	        helper.setFrom("abc@gmail.com");
	         emailSender.send(mimeMessage);;
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
        
     }
	 @Override
	 public void passwordChangeEmail(
			 String to,String subject,CharSequence passwordValue
	 ){
		 MimeMessage mimeMessage = emailSender.createMimeMessage();
		 MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
		 String htmlMsg = "    <div style=\"margin-left: 10%;\">\r\n"
				 + "        <div style=\"margin-left:5rem;display: block;padding:1rem; border-radius: 1rem;  border: 0.01rem solid #0067b8;width: fit-content;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';\">\r\n"
				 + "            <h3 style=\"text-align: center;background-color: #0067b8;color: white; margin: 0;padding: 2rem; position: relative; \">\r\n"
				 + "                EEHRS one time temporary password</h3>\r\n"
				 + "                \r\n"
				 + "                <div style=\"margin: 1rem;\" >\r\n"
				 + "                    <p>Hey, it is easy to change password don't worry we will walk you \r\n"
				 + "                        <br/>through start by copying temporary message we send you  </p>\r\n"
				 + "                    <h4 style=\" font-weight: bold; background-color: black;padding: 1rem; padding: 0.5rem; color: rgb(131, 131, 131); margin: 1rem 3rem; text-align: center;\">"+passwordValue+"</h4>\r\n"
				 + "                    <p>This password is for one time use only you will change the password <br/>\r\n"
				 + "                        after you login so you don't need to remember the password. <br/> visit: <a style=\"text-decoration: none; color: #0067b8;\" href=\"http://localhost:3000/\">eehrs/login</a> to login</p>\r\n"
				 + "                </div>\r\n"
				 + "\r\n"
				 + "                \r\n"
				 + "        </div>\r\n"
				 + "        <p style=\"color: grey;padding: 0rem 1rem;font-size: small;\">\r\n"
				 + "            This email is sent by eehrs when new account is created to assist you set up your account for  use. \r\n"
				 + "        </p>\r\n"
				 + "    </div>";
		 try {
			 helper.setText(htmlMsg, true);
			 helper.setTo(to);
			 helper.setSubject(subject);
			 helper.setFrom("abc@gmail.com");
			 emailSender.send(mimeMessage);;
		 } catch (MessagingException e) {
			 // TODO Auto-generated catch block
			 e.printStackTrace();
		 }
	 }
}
