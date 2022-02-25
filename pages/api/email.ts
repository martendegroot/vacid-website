import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { name, email, message } = req.body;

  const config = {
    host: `${process.env.SMTP_SERVER_ADDRESS}`,
    port: 465,
    secure: true,
    auth: {
      user: `${process.env.SMTP_ACCOUNT_NAME}`,
      pass: `${process.env.SMTP_ACCOUNT_PASSWORD}`,
    },
  };

  const transporter = nodemailer.createTransport(config);

  transporter.sendMail(
    {
      from: `"${name}" <${email}>`,
      to: `"${process.env.RECIPIENT_NAME}", <${process.env.RECIPIENT_ADDRESS}>`,
      subject: `Nieuw bericht van ${name}`,
      text: message,
    },
    (err, info) => {
      if (err) {
        res.status(500).end();
      } else if (info.rejected && info.rejected.length > 0) {
        res.status(503).end();
      } else {
        res.status(200).end();
      }
    }
  );
};

export default handler;
