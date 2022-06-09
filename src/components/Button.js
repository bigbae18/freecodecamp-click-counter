const Button = ({ handler, children, isReset }) => (
    <button className={isReset ? 'reset-button' : 'click-button'} onClick={handler}>{children}</button>
)

export default Button;