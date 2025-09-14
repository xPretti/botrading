import { HoverCard } from "radix-ui";
import styles from "./NavLinkMenu.module.css";
import { ChevronDown } from "lucide-react";

export interface NavLinkMenuProps {
	text: string;
	href?: string;
	children: React.ReactNode;
}

export default function NavLinkMenu({ text, href = "", children }: NavLinkMenuProps) {
	return (
		<div className={styles.navLinkMenu}>
			<HoverCard.Root openDelay={150}>
				<HoverCard.Trigger className={styles.navLinkMenuTrigger}>
					<a className={styles.navLink} href={href}>
						{text}
					</a>
					<div className={styles.navLinkIcon}>
						<ChevronDown />
					</div>
				</HoverCard.Trigger>
				<HoverCard.Content className={styles.navLinkMenuItems} >
					<div className={styles.navLinkMenuItemsArrow}></div>
					<div className={styles.navLinkMenuItemsContent}>
						<p className={styles.navLinkMenuItemsContentTitle}>{text}</p>
						{children}
					</div>
				</HoverCard.Content>
			</HoverCard.Root>
		</div >
	);
}
