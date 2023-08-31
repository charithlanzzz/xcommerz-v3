<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = trim($_POST["phone"]);
        $package = trim($_POST["package"]);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($email) OR empty($phone) OR empty($package) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Please complete the form and try again.";
            exit;
        }

        // Set the email subject.
        $subject = "xCommerz - Request a Quote - ".date("Y-m-d H:i:s");

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Phone: $phone\n";
        $email_content .= "Package: $package\n";
        $email_content .= "Message:$message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        require_once('PHPMailer/class.phpmailer.php');

        $mail = new PHPMailer();
        $mail->IsSMTP();

        try {

            $mail->Host       = "mail.xiteb.info";     // SMTP server
            $mail->SMTPDebug  = 0;                     // enables SMTP debug information (for testing)
                                                       // 1 = errors and messages
                                                       // 2 = messages only
            $mail->SMTPAuth   = true;                  // enable SMTP authentication
            $mail->Host       = "mail.xiteb.info"; // sets the SMTP server
            $mail->Port       = 587;                    // set the SMTP port for the GMAIL server
            $mail->Username   = "no-reply@xiteb.info"; // SMTP account username
            $mail->Password   = "HA82jmMfc?91";        // SMTP account password

            $mail->AddReplyTo("hello@xiteb.com","Xiteb (Pvt) Ltd.");
            $mail->SetFrom('no-reply@xiteb.info', 'Xiteb (Pvt) Ltd.');

            $mail->AddAddress("amila@xiteb.com");

            // $mail_receivers=array('dhanesh@xiteb.com','marketing4@xiteb.com','xitebleads@gmail.com','hradminexecutive@xiteb.com','operations@xiteb.com','projects3@xiteb.com','projects7@xiteb.com');

            // foreach ($mail_receivers as $mail_receiver) {
            //  $mail->AddCC($mail_receiver);
            // }

            $mail->Subject    = $subject;

            $mail->MsgHTML($email_content);

            $mail_status=$mail->Send();

            if ($mail_status) {
                http_response_code(200);
                echo "Message sent successfully. We'll get back to you soon...";
            }
            
        }
        catch (phpmailerException $e) {
            // echo $e->errorMessage();
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        } 
        catch (Exception $e) {
          // echo $e->getMessage();
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>