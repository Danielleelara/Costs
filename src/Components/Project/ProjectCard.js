import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom';
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

const ProjectCard = ({id, name, budget, category, handleRemove}) => {
    return ( 
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> ${budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to='/'>
                 <BsPencil /> Editar
                </Link>
                <Link to='/'>
                    <BsFillTrashFill /> Remover
                </Link>
            </div>
        </div>
     );
}
 
export default ProjectCard;