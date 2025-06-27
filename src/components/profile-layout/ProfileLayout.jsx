import { Outlet } from 'react-router';
import styles from './styles.module.scss';

export default function ProfileLayout() {
    return (
        <div>
            <div>
                верхняя часть профиля
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}