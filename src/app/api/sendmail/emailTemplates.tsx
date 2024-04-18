interface EmailTemplateProps {
  email: string
  subject: string
  message: string
}

export const userEmailTemplate = () => {
  const html = /*html*/ `
  <!doctype html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <style media="all" type="text/css">
        @media all {
          .btn-primary table td:hover {
            background-color: #ec0867 !important;
          }
        
          .btn-primary a:hover {
            background-color: #ec0867 !important;
            border-color: #ec0867 !important;
          }
        }

        @media only screen and (max-width: 640px) {
          .main p,
          .main td,
          .main span {
            font-size: 16px !important;
          }
        
          .wrapper {
            padding: 8px !important;
          }
        
          .content {
            padding: 0 !important;
          }
        
          .container {
            padding: 0 !important;
            padding-top: 8px !important;
            width: 100% !important;
          }
        
          .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important;
          }
        
          .btn table {
            max-width: 100% !important;
            width: 100% !important;
          }
        
          .btn a {
            font-size: 16px !important;
            max-width: 100% !important;
            width: 100% !important;
          }
        }

        @media all {
          .ExternalClass {
            width: 100%;
          }
        
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
            line-height: 100%;
          }
  
          .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important;
          }
        
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
          }
        }
      </style>
    </head>

    <body style="font-family: Helvetica, sans-serif; -webkit-font-smoothing: antialiased;
      font-size: 16px; line-height: 1.3; -ms-text-size-adjust: 100%; -webkit-text-size-adjust:
      100%; background-color: #f4f5f6; margin: 0; padding: 0;">
      
      <table
        role="presentation"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="body"
        style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt;
        background-color: #f4f5f6; width: 100%;"
        width="100%"
        bgcolor="#f4f5f6">
        
        <tr>
          <td
            style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;"
            valign="top">
            &nbsp;
          </td>

          <td
            class="container"
            style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;
            max-width: 600px; padding: 0; padding-top: 24px; width: 600px; margin: 0 auto;"
            width="600"
            valign="top">

            <div
              class="content"
              style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 600px; padding: 0;">
  
              <!-- START CENTERED WHITE CONTAINER -->
              <span
                class="preheader"
                style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0;
                opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">
                E-mail successfully sent to Lucas Munhoz!
              </span>

              <table  
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="main"
                style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff;
                border: 1px solid #eaebed; border-radius: 16px; width: 100%;"
                width="100%">
  
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td
                    class="wrapper"
                    style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box;"
                    valign="top">

                    <h1
                      style="font-family: Helvetica, sans-serif; color: #ffffff; background: #934B62; text-align: center;
                      padding-top: 24px; padding-bottom: 24px; font-size: 24px; font-weight: bold; margin: 0; margin-bottom: 16px;
                      border-radius: 16px 16px 0 0;">
                      Your Email Has Been Sent Successfully!
                    </h1>

                    <p style="font-family: Helvetica, sans-serif; font-size: 20px; font-weight: bold; margin: 0; margin-bottom: 16px; padding: 0px 24px">
                      Hi there...
                    </p>

                    <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px; padding: 0px 24px">
                      Your e-mail has been sent successfully to Lucas Munhoz inbox, thanks for contacting me.
                    </p>

                    <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px; padding: 0px 24px">
                      And thank you so much for your attention and interactions to my page, hope you enjoyed.
                    </p>

                    <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px; padding: 0px 24px">
                      Have a nice day!
                    </p>
                  </td>
                </tr>
  
              <!-- END MAIN CONTENT AREA -->
              </table>
  
              <!-- START FOOTER -->
              <div class="footer" style="clear: both; padding-top: 24px; text-align: center; width: 100%;">
                <table
                  role="presentation"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                  width="100%">
          
                  <tr>
                    <td
                      class="content-block powered-by"
                      style="font-family: Helvetica, sans-serif; vertical-align: top; color: #9a9ea6; font-size: 16px; text-align: center;"
                      valign="top"
                      align="center">
                      Made By 
                      <a style="color: #393b3f; font-size: 18px; text-align: center;">
                        Lucas Munhoz
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </td>

          <td
            style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;"
            valign="top">
            &nbsp;
          </td>
        </tr>
      </table>
    </body>
  </html>
  `

  return html
}

export const lucasEmailTemplate = ({ email, subject, message }: EmailTemplateProps) => {
  const html = /*html*/ `
  <!doctype html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <style media="all" type="text/css">
        @media all {
          .btn-primary table td:hover {
            background-color: #ec0867 !important;
          }
        
          .btn-primary a:hover {
            background-color: #ec0867 !important;
            border-color: #ec0867 !important;
          }
        }

        @media only screen and (max-width: 640px) {
          .main p,
          .main td,
          .main span {
            font-size: 16px !important;
          }
        
          .wrapper {
            padding: 8px !important;
          }
        
          .content {
            padding: 0 !important;
          }
        
          .container {
            padding: 0 !important;
            padding-top: 8px !important;
            width: 100% !important;
          }
        
          .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important;
          }
        
          .btn table {
            max-width: 100% !important;
            width: 100% !important;
          }
        
          .btn a {
            font-size: 16px !important;
            max-width: 100% !important;
            width: 100% !important;
          }
        }

        @media all {
          .ExternalClass {
            width: 100%;
          }
        
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
            line-height: 100%;
          }
  
          .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important;
          }
        
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
          }
        }
      </style>
    </head>

    <body style="font-family: Helvetica, sans-serif; -webkit-font-smoothing: antialiased;
      font-size: 16px; line-height: 1.3; -ms-text-size-adjust: 100%; -webkit-text-size-adjust:
      100%; background-color: #f4f5f6; margin: 0; padding: 0;">
      
      <table
        role="presentation"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="body"
        style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt;
        background-color: #f4f5f6; width: 100%;"
        width="100%"
        bgcolor="#f4f5f6">
        
        <tr>
          <td
            style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;"
            valign="top">
            &nbsp;
          </td>

          <td
            class="container"
            style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;
            max-width: 600px; padding: 0; padding-top: 24px; width: 600px; margin: 0 auto;"
            width="600"
            valign="top">

            <div
              class="content"
              style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 600px; padding: 0;">
  
              <!-- START CENTERED WHITE CONTAINER -->
              <span
                class="preheader"
                style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0;
                opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">
                New email from your portfolio!
              </span>

              <table  
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="main"
                style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff;
                border: 1px solid #eaebed; border-radius: 16px; width: 100%;"
                width="100%">
  
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td
                    class="wrapper"
                    style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box;"
                    valign="top">

                    <h1
                      style="font-family: Helvetica, sans-serif; color: #ffffff; background: #934B62; text-align: center;
                      padding-top: 24px; padding-bottom: 24px; font-size: 24px; font-weight: bold; margin: 0; margin-bottom: 16px;
                      border-radius: 16px 16px 0 0;">
                      Portfolio: Someone Has Contacted You!
                    </h1>

                    <p style="font-family: Helvetica, sans-serif; font-size: 20px; font-weight: bold; margin: 0; margin-bottom: 16px; padding: 0px 24px">
                      ${subject}
                    </p>

                    <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 32px; padding: 0px 24px">
                      ${message}
                    </p>
                    
                    <p style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px; padding: 0px 24px">
                      <span style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: bold; margin: 0;">
                        User email: 
                      </span>
                      ${email}
                    </p>
                  </td>
                </tr>
  
              <!-- END MAIN CONTENT AREA -->
              </table>
  
              <!-- START FOOTER -->
              <div class="footer" style="clear: both; padding-top: 24px; text-align: center; width: 100%;">
                <table
                  role="presentation"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                  width="100%">
          
                  <tr>
                    <td
                      class="content-block powered-by"
                      style="font-family: Helvetica, sans-serif; vertical-align: top; color: #9a9ea6; font-size: 16px; text-align: center;"
                      valign="top"
                      align="center">
                      Made By 
                      <a style="color: #393b3f; font-size: 18px; text-align: center;">
                        Lucas Munhoz
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </td>

          <td
            style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;"
            valign="top">
            &nbsp;
          </td>
        </tr>
      </table>
    </body>
  </html>
  `

  return html
}