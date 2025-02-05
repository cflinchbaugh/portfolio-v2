import { css } from "@emotion/css";
import { theme } from "../theme";
import LinkedIn from "/LinkedIn.webp";
import GitHub from "/GitHub.webp";
import Email from "/Email.webp";
import { ImageLink } from "../components/ImageLink";

export const Contact = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        margin: auto;
        min-height: 100vh;
        background: linear-gradient(to bottom, #fe8a75 0%, #b5cbed 100%);
        padding: ${theme.spacing.lg};
      `}
    >
      <h2 className="hidden">Contact</h2>

      <div
        className={
          css`
            display: flex;
            flex-direction: column;
            gap: ${theme.spacing.md};
            margin: auto;
            max-width: 80vw;
          ` + " frosted-glass"
        }
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            gap: ${theme.spacing.xl};
            max-width: 80vw;
            margin: auto;
          `}
        >
          You've heard a bit about me, I'd love to hear from you.
        </div>

        <div
          className={css`
            display: flex;
            flex-direction: row;
            gap: ${theme.spacing.lg};
            max-width: 80vw;
            justify-content: center;
          `}
        >
          <ImageLink
            alt="LinkedIn Logo"
            href="https://www.linkedin.com/in/christopher-flinchbaugh/"
            src={`${LinkedIn}`}
          />
          <ImageLink
            alt="Email Logo"
            href="mailto:christopher.e.flinchbaugh@gmail.com"
            src={`${Email}`}
          />
          <ImageLink
            alt="GitHub Logo"
            href="https://github.com/cflinchbaugh"
            src={`${GitHub}`}
          />
        </div>
      </div>
    </div>
  );
};
