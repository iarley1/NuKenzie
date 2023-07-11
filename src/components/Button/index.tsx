interface iButtonProps {
    children: React.ReactNode;
    onClick?: () => void
    type: "submit" | "reset" | "button"
}

export const Button = ({children, onClick, type}: iButtonProps) => {
    return (
        <button type={type} onClick={onClick}>{children}</button>
    );
}