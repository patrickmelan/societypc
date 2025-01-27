import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, lastName, email, message
}) => (
        <div>            
            <p><strong>FROM:</strong> {lastName}, {firstName}</p>
            <p><strong>EMAIL:</strong> {email}</p>
            <div>
                {message}
            </div>
            
            <p><small>This email was sent from the contact form at societypc.com/contact</small></p>
        </div>
);
