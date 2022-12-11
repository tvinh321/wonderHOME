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
                >
                    <div className="flex items-center gap-x-2">
                        <EmailIcon size={20} round />
                        <p className="text-sm">Email</p>
                    </div>
                </EmailShareButton>
            </MenuItem>
        </Menu>
    );
}
