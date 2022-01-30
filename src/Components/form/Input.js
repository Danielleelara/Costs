import styles from './Input.module.css'

const Input = ({type, text, name, placeholder, value, handleonChange}) => {
    return ( 
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder}  
                onChange={handleonChange}
                value={value}
            />
        </div>
     );
}
 
export default Input;