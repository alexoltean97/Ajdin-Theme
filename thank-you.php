<?php require 'mailer/PHPMailerAutoload.php'; ?>
<?php
if(isset($_POST['submit']) && array_key_exists('name', $_POST) && array_key_exists('email', $_POST)){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $to = "contact@top-tennis.net";
    $subject = "Inner Tennis Request";
    $headers = "From: " . strip_tags($email) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($email) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $content = 'Subject: ' . $subject . '<br/>';
    $content .= 'Name: ' . $name . '<br/>';
    $content .= 'Email: ' . $email . '<br/>';

    if(array_key_exists('Inner_Tennis_App', $_POST)) {
        $content .= $_POST['Inner_Tennis_App'] . '<br/>';
    }

    if(array_key_exists('Mental_Coaching', $_POST)) {
        $content .= $_POST['Mental_Coaching'] . '<br/>';
    }

    if(array_key_exists('Other', $_POST)) {
        $content .= $_POST['Other'] . '<br/>';
    }

    // mail($to,$subject,$content,$headers);
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->Host = 'secureams34.sgcpanel.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'contact@top-tennis.net';
    $mail->Password = '';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->setFrom('contact@top-tennis.net', 'Mailer');
    $mail->addAddress('vlad@digitalgarage.ro');
    $mail->Body = $content;

    if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Privacy Policy</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="HTML5 website template">
    <meta name="keywords" content="global, template, html, sass, jquery">
    <meta name="author" content="Bucky Maler">
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="icon" href="assets/img/logo.png">
</head>
<body style="overflow-y:scroll;">

<!-- notification for small viewports and landscape oriented smartphones -->
<div class="device-notification">
    <a class="device-notification--logo" href="#0">
        <img src="assets/img/logo.png" width="28" alt="Global">
        <p>Global</p>
    </a>
    <p class="device-notification--message">Global has so much to offer that we must request you orient your device to portrait or find a larger screen. You won't be disappointed.</p>
</div>

<div class="perspective effect-rotate-left">
    <div class="container"><div class="outer-nav--return"></div>
        <div id="viewport" class="l-viewport">
            <div class="l-wrapper">
                <header class="header">
                    <a class="header--logo" href="index.php">
                        <img src="assets/img/logo.png"  width="28" alt="Global">
                        <p>Inner Tennis</p>
                    </a>

                    <div class="link_box_2">
                        <a href="index.php" style="color: #fff; text-decoration: none;">
                        <span>
                    <svg class="back-arrow" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style=" width: 15px; fill: #fff;" xml:space="preserve">
                    <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                      <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                    </g>
                    </svg>
                        </span>
                            Home </a>  &nbsp;
                    </div>
                </header>

                <ul class="l-main-content main-content">

                    <li id="privacy" class="l-section section privacy section--is-active">
                        <div class="hire">
                            <div class="page-title secound-page-title">
                                <h1>Thank you !</h1>
                            </div>
                            <div class="text_scroll">
                                    <h2>We'll get back to you soon!</h2>

                                <div class="link_box">
                                    <a href="about-page.php" style="color: #fff; text-decoration: none;">About &nbsp;
                                        <span>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style=" width: 15px; fill: #fff;" xml:space="preserve">
                    <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                      <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                    </g>
                    </svg>
                  </span>
                                    </a> &nbsp; &nbsp;

                                    <a href="terms-conditions.php" style="color: #fff; text-decoration: none;">Terms and codition  &nbsp;
                                        <span>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style=" width: 15px; fill: #fff;" xml:space="preserve">
                    <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                      <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                    </g>
                    </svg>
                  </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-2.2.4.min.js"><\/script>')</script>


</body>
</html>
