import { forwardRef } from "react";

const Button = forwardRef(({ children, ...props }, ref) => {
    
    return (        
        <button ref={ref} {...props}>
            {children}
        </button>
    );
})

Button.displayName = "Button"
export default Button;