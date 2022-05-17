import styles from './nav.module.scss'
import Link from 'next/link'


const navItems =[
    {
        lable: "Work",
        slug: "work"
    },
    {
        lable: "About",
        slug: "about"
    },
    {
        lable: "Contact",
        slug: "contact"
    },
];

const Nav = () => {
    return <nav className={styles.nav}>
        <ul className={styles.list}>
            {navItems.map((navItem, index) =>{
                const { lable, slug } = navItem;
                return <li 
                        key={index} className={styles.ListItem}
                        >

                    <Link href={`/${slug}`}>
                    <a>
                        {lable}
                    </a>
                    </Link>
                </li>
            })}
        </ul>
    </nav> 
}
export default Nav