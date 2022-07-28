import { mailer } from "../mailer";

export const sendDemoEmail = async (params: SendDemoEmail) => {
    const { actionButton, callToActionHeader, headerBlock, subject, unsubscribeURL, emailSummaryTop, to } = params;

    const rawHtml = `<!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
      <title>${subject}</title>
      <!--[if !mso]><!-- -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!--<![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
    
        body {
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
    
        table,
        td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
    
        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }
    
        p {
          display: block;
          margin: 13px 0;
        }
      </style>
      <!--[if mso]>
            <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
      <!--[if lte mso 11]>
            <style type="text/css">
              .mj-outlook-group-fix { width:100% !important; }
            </style>
            <![endif]-->
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Droid+Sans:300,400,500,700" rel="stylesheet" type="text/css">
      <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700);
        @import url(https://fonts.googleapis.com/css?family=Droid+Sans:300,400,500,700);
      </style>
      <!--<![endif]-->
      <style type="text/css">
        @media only screen and (min-width:480px) {
          .mj-column-per-100 {
            width: 100% !important;
            max-width: 100%;
          }
        }
      </style>
      <style type="text/css">
        [owa] .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }
      </style>
      <style type="text/css">
        @media only screen and (max-width:480px) {
          table.mj-full-width-mobile {
            width: 100% !important;
          }
    
          td.mj-full-width-mobile {
            width: auto !important;
          }
        }
      </style>
    </head>
    
    <body style="background-color:#ffffff;">
      <div style="background-color:#ffffff;">
        <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="background:#ffffff;background-color:#ffffff;width:100%;">
            <tbody>
              <tr>
                <td
                  style="border:1px solid #ffffff;direction:ltr;font-size:0px;padding:10px 0px 10px 0px;padding-bottom:10px;padding-left:0px;padding-right:0px;padding-top:10px;text-align:center;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:598px;" ><![endif]-->
                  <div class="mj-column-per-100 mj-outlook-group-fix"
                    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
                      width="100%">
                      <tr>
                        <td align="left"
                          style="font-size:0px;padding:0px 0px 0px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
                          <div
                            style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                            <p class="text-build-content"
                              style="text-align: center; margin: 10px 0; margin-top: 10px; margin-bottom: 10px;"
                              data-testid="yjGVwzQlASx"><span
                                style="color:#000000;font-family:Open Sans;font-size:16px;">${emailSummaryTop}</span></p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        <div style="background:#151c55;background-color:#151c55;margin:0px auto;max-width:600px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="background:#151c55;background-color:#151c55;width:100%;">
            <tbody>
              <tr>
                <td
                  style="border:1px solid #151c55;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;padding-bottom:0px;padding-left:0px;padding-right:0px;padding-top:0px;text-align:center;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:598px;" ><![endif]-->
                  <div class="mj-column-per-100 mj-outlook-group-fix"
                    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
                      width="100%">
                      <tr>
                        <td align="center"
                          style="font-size:0px;padding:48px 25px 23px 25px;padding-top:48px;padding-right:25px;padding-bottom:23px;padding-left:25px;word-break:break-word;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                            style="border-collapse:collapse;border-spacing:0px;">
                            <tbody>
                              <tr>
                                <td style="width:108px;"><a href="${headerBlock.logoLinkURL}" target="_blank"><img
                                      alt="Company logo" height="auto" src="${headerBlock.logoURL}"
                                      style="border:none;border-radius:px;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
                                      width="108"></a></td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td align="left"
                          style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:20px;word-break:break-word;">
                          <div
                            style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                            <p class="text-build-content"
                              style="text-align: center; margin: 10px 0; margin-top: 10px; margin-bottom: 10px;"
                              data-testid="ypOnvaIdWHN"><span
                                style="color:#ffffff;font-family:Arial;font-size:32px;line-height:22px;"><b>${headerBlock.text}</b></span>
                            </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        <div style="background:#eaeaea;background-color:#eaeaea;margin:0px auto;max-width:600px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="background:#eaeaea;background-color:#eaeaea;width:100%;">
            <tbody>
              <tr>
                <td
                  style="border:1px solid #eaeaea;direction:ltr;font-size:0px;padding:20px 0px 10px 0px;padding-bottom:10px;padding-left:0px;padding-right:0px;padding-top:20px;text-align:center;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:598px;" ><![endif]-->
                  <div class="mj-column-per-100 mj-outlook-group-fix"
                    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
                      width="100%">
                      <tr>
                        <td align="left"
                          style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
                          <div
                            style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                            <p class="text-build-content"
                              style="text-align: center; margin: 10px 0; margin-top: 10px; margin-bottom: 10px;"
                              data-testid="qwhbKp6Bb"><span
                                style="color:#000000;font-family:Droid Sans;font-size:16px;">${callToActionHeader}</span>
                            </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        <div style="background:#eaeaea;background-color:#eaeaea;margin:0px auto;max-width:600px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="background:#eaeaea;background-color:#eaeaea;width:100%;">
            <tbody>
              <tr>
                <td
                  style="border:1px solid #eaeaea;direction:ltr;font-size:0px;padding:20px 0px 20px 0px;padding-bottom:20px;padding-left:0px;padding-right:0px;padding-top:20px;text-align:center;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:598px;" ><![endif]-->
                  <div class="mj-column-per-100 mj-outlook-group-fix"
                    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
                      width="100%">
                      <tr>
                        <td align="center" vertical-align="middle"
                          style="background:#eaeaea;font-size:0px;padding:10px 25px 10px 25px;padding-right:25px;padding-left:25px;word-break:break-word;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                            style="border-collapse:separate;line-height:100%;">
                            <tr>
                              <td align="center" bgcolor="#151c55" role="presentation"
                                style="border:0px solid #ffffff;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px 10px 25px;background:#151c55;"
                                valign="middle"><a href="${actionButton.url}"
                                  style="display:inline-block;background:#151c55;color:#ffffff;font-family:Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px 10px 25px;mso-padding-alt:0px;border-radius:3px;"
                                  target="_blank"><span
                                    style="background-color:#151c55;color:#ffffff;font-family:Droid Sans;font-size:14px;">${actionButton.text}</span></a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
        <div style="background:#eaeaea;background-color:#eaeaea;margin:0px auto;max-width:600px;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="background:#eaeaea;background-color:#eaeaea;width:100%;">
            <tbody>
              <tr>
                <td
                  style="border:1px solid #eaeaea;direction:ltr;font-size:0px;padding:20px 0px 20px 0px;padding-left:0px;padding-right:0px;text-align:center;">
                  <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:598px;" ><![endif]-->
                  <div class="mj-column-per-100 mj-outlook-group-fix"
                    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"
                      width="100%">
                      <tr>
                        <td align="left"
                          style="font-size:0px;padding:0px 20px 0px 20px;padding-top:0px;padding-bottom:0px;word-break:break-word;">
                          <div
                            style="font-family:Arial, sans-serif;font-size:13px;letter-spacing:normal;line-height:1;text-align:left;color:#000000;">
                            <p class="text-build-content"
                              style="text-align: center; margin: 10px 0; margin-top: 10px; margin-bottom: 10px;"
                              data-testid="t81vbQtkjrJN"><span
                                style="color:#949aa2;font-family:Droid Sans;font-size:16px;line-height:22px;">Click here to
                              </span><a class="link-build-content" style="color:inherit;; text-decoration: none;"
                                target="_blank" href="${unsubscribeURL}"><span
                                  style="color:#949aa2;font-family:Arial;font-size:16px;line-height:22px;">unsubscribe</span></a>
                            </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!--[if mso | IE]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]></td></tr></table><![endif]-->
      </div>
    </body>
    
    </html>`;

    mailer({ rawHtml, subject, to });
};
