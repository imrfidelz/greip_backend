const getWelcomeEmailTemplate = (name, userType = 'user') => {
  const isEmployer = userType === 'employers';
  
  return {
    subject: `Welcome to GREiPR ${isEmployer ? 'for Employers' : ''} - You're on the waitlist! 🎉`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to GREiPR</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
          .content { padding: 40px 30px; }
          .feature-box { background-color: #f1f5f9; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #667eea; }
          .cta-button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; margin: 20px 0; font-weight: bold; }
          .footer { background-color: #1e293b; color: #94a3b8; padding: 30px; text-align: center; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 28px;">Welcome to GREiPR! 🚀</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">You're officially on the waitlist</p>
          </div>
          
          <div class="content">
            <h2 style="color: #1e293b; margin-top: 0;">Hi ${name}! 👋</h2>
            
            <p style="color: #475569; line-height: 1.6;">
              Thank you for joining the GREiPR waitlist! We're thrilled to have you as part of our early community.
            </p>
            
            ${isEmployer ? `
              <div class="feature-box">
                <h3 style="color: #1e293b; margin-top: 0;">What's Next for Employers?</h3>
                <ul style="color: #475569; line-height: 1.6;">
                  <li><strong>Smart Recruitment:</strong> Access pre-verified candidates with digital portfolios</li>
                  <li><strong>Streamlined Onboarding:</strong> Reduce hiring time with verified professional profiles</li>
                  <li><strong>Quality Assurance:</strong> Connect with candidates who have completed our verification process</li>
                </ul>
              </div>
            ` : `
              <div class="feature-box">
                <h3 style="color: #1e293b; margin-top: 0;">What's Coming Your Way?</h3>
                <ul style="color: #475569; line-height: 1.6;">
                  <li><strong>Verified Opportunities:</strong> Access to exclusive job listings from verified employers</li>
                  <li><strong>Digital Portfolio:</strong> Showcase your skills with a professional profile</li>
                  <li><strong>Career Growth:</strong> Tools and resources to advance your professional journey</li>
                </ul>
              </div>
            `}
            
            <p style="color: #475569; line-height: 1.6;">
              We're working hard to launch GREiPR and will keep you updated on our progress. You'll be among the first to know when we go live!
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.FRONTEND_URL}" class="cta-button">Visit Our Website</a>
            </div>
            
            <p style="color: #64748b; font-size: 14px; font-style: italic;">
              Have questions? Simply reply to this email - we'd love to hear from you!
            </p>
          </div>
          
          <div class="footer">
            <p style="margin: 0 0 10px 0;"><strong>GREiPR Team</strong></p>
            <p style="margin: 0;">Building the future of professional networking and career growth</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
      Welcome to GREiPR, ${name}!
      
      Thank you for joining our waitlist! We're excited to have you as part of our early community.
      
      ${isEmployer ? 
        `As an employer, you'll soon have access to:
        - Smart recruitment with pre-verified candidates
        - Streamlined onboarding processes  
        - Quality assurance through our verification system` 
        : 
        `Here's what's coming your way:
        - Verified job opportunities from trusted employers
        - Professional digital portfolio tools
        - Career growth resources and networking`
      }
      
      We'll keep you updated on our progress and you'll be among the first to know when we launch!
      
      Questions? Just reply to this email.
      
      Best regards,
      The GREiPR Team
    `
  };
};

module.exports = {
  getWelcomeEmailTemplate
};
