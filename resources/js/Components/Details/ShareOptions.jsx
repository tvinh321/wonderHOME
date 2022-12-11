import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { FacebookShareButton, EmailShareButton } from "react-share";
import { FacebookIcon, EmailIcon } from "react-share";

export default function ShareOptions({ title }) {
    const url = window.location.href;
    return (
        <Menu
            menuButton={
                <MenuButton>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-share"
                        viewBox="0 0 16 16"
                    >
                        {" "}
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />{" "}
                    </svg>
                </MenuButton>
            }
            transition
        >
            <MenuItem>
                <FacebookShareButton
                    url={url}
                    quote={title}
                    hashtag={"#wonderHome"}
                    description={title}
                >
                    <div className="flex items-center gap-x-2">
                        <FacebookIcon size={20} round />
                        <p className="text-sm">Facebook</p>
                    </div>
                </FacebookShareButton>
            </MenuItem>

            <MenuItem>
                <EmailShareButton
                    subject={`wonderHome - ${title}`}
                    body={`Bất động sản tốt tại wonderHome nè!`}
                    onClick={() => {}}
                    url={url}
                >
                    <div className="flex items-center gap-x-2">
                        <EmailIcon size={20} round />
                        <p className="text-sm">Email</p>
                    </div>
                </EmailShareButton>
            </MenuItem>

            <MenuItem>
                <div
                    className="flex items-center gap-x-2"
                    onClick={() => {
                        navigator.clipboard.writeText(url);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-link-45deg"
                        viewBox="0 0 16 16"
                    >
                        {" "}
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />{" "}
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />{" "}
                    </svg>
                    <p className="text-sm">Copy link</p>
                </div>
            </MenuItem>
        </Menu>
    );
}
