import Input from '../form/Input';
import Select from '../form/Select';
import styles from '../Pages/ProjectForm.module.css'
import SubmitButton from '../form/SubmitButton'

const ProjectForm = ({btnText}) => {
    return ( 
        <form className={styles.form}>
            <Input 
                type="text" 
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
           <Input 
                type="number" 
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />
            <Select name="category_id" text="Selecione a categoria"/>
            <SubmitButton text={btnText}/>
        </form>
     );
}
 
export default ProjectForm;