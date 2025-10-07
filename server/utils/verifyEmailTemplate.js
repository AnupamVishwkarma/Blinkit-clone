const verifyEmailTemplate = ({ name, url }) => {
    return `
    <p>Dear ${name},</p>
    <p>Thank you for registering at Blinkit.</p>
    <a href="${url}" 
       style="
           display: inline-block;
           color: white;
           background-color: blue;
           text-decoration: none;
           padding: 10px 20px;
           margin-top: 10px;
           border-radius: 5px;
       ">
       Verify Email
    </a>
    `;
};

export default verifyEmailTemplate;
