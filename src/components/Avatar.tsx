interface AvatarProps {
    src: string;
    hasBorder?: boolean;
    alt?: string;
}

export function Avatar(props: AvatarProps) {
    const hasBorder = props.hasBorder !== false;

    return (
        <img 
            className={hasBorder ? "w-[calc(3rem+12px)] h-[calc(3rem+12px)] rounded-[8px] border-4 border-green-500" : "w-12 h-12 rounded-[8px]"}
            src={props.src} 
            alt={props.alt}
    />
    )
}