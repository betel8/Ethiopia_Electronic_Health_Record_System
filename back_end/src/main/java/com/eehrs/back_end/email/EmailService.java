package com.eehrs.back_end.email;


public interface EmailService {
	  
	    public void temporaryPasswordEmail(
	      String to, String subject, CharSequence passwordValue);
		public void passwordChangeEmail(
				String to, String subject, CharSequence passwordValue
		);

}
