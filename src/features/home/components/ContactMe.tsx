import "../styles/ContactMe.css";

export default function ContactMe() {
  const phoneNumber =
    (import.meta.env.VITE_PHONE_NUMBER as string) ||
    "ошибка! тут должен быть номер! Если вы видите это сообщение, пожалуйста, сообщите по контактам выше ☝️";
  return (
    <div id="contact-me" className="wrapper">
      <h2>
        <span>Свяжитесь</span> со мной!
      </h2>
      <a href="mailto:otiosumax@gmail.com">
        Почта: <span>otiosumax@gmail.com</span>
      </a>
      <br />
      <a
        href="https://t.me/otiosumax"
        target="_blank"
        rel="noopener noreferrer"
      >
        Телеграм: <span>@otiosumax</span>
      </a>
      <p>Телефон: {phoneNumber}</p>
    </div>
  );
}
