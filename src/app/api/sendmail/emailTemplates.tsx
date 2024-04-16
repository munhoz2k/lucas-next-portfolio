import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const ReactEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>React Welcome, {firstName}!</h1>
  </div>
);

export const SimpleEmailTemplate = ({ firstName }: EmailTemplateProps) => {
  const html = `
    <div>
      <h1>Welcome, ${firstName}!</h1>
    </div>
  `

  return html
}