interface iButtonProps {
    children: React.ReactNode;
    onClick?: () => void
}

export const Button = ({children, onClick}: iButtonProps) => {
    return (
        <button onClick={onClick}>{children}</button>
    );
}