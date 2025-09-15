import { HoverCard } from "radix-ui";
import styles from "./NavLinkMenu.module.css";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavLinkMenuItem } from "./Compound/NavLinkMenuItem";

export interface NavLinkMenuProps {
	text: string;
	href?: string;
	children: React.ReactNode;
}

export function NavLinkMenu({ text, children }: NavLinkMenuProps) {
	const [open, setOpen] = useState(false);

	const handleClickMain = () => {
	};

	const handleClick = () => {
		setOpen(!open);
	};

	const handleMouseEnter = () => {
		setOpen(true);
	};

	const handleMouseLeave = () => {
		setOpen(false);
	};


	return (
		<div className={styles.navLinkMenu} onMouseLeave={handleMouseLeave}>
			<HoverCard.Root open={open} onOpenChange={handleClickMain}>
				<HoverCard.Trigger
					className={styles.navLinkMenuTrigger}
					onClick={handleClick}
					onMouseEnter={handleMouseEnter}
				>
					<p className={styles.navLink}>{text}</p>
					<div className={styles.navLinkIcon}>
						<ChevronDown />
					</div>
				</HoverCard.Trigger>
				<HoverCard.Content className={styles.navLinkMenuItems}>
					<div className={styles.navLinkMenuItemsArrow}></div>
					<div className={styles.navLinkMenuItemsContent}>
						<p className={styles.navLinkMenuItemsContentTitle}>{text}</p>
						{children}
					</div>
				</HoverCard.Content>
			</HoverCard.Root>
		</div>
	);
}

/**
 * Sub components
 */
NavLinkMenu.Item = NavLinkMenuItem;