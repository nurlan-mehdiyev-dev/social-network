import styles from "./notifications.module.scss"

const notifications = [
    {
        id: 1,
        message: 'John Wick commented on one of your updates',
        date: '1 day, 4 hours ago',
    },
    {
        id: 2,
        message: 'John Wick replied to one of your activity comments',
        date: '6 days, 15 hours ago',
    },
    {
        id: 3,
        message: 'John Wick commented on one of your updates',
        date: '1 week ago',
    },
    {
        id: 4,
        message: 'John Wick commented on one of your activity comments',
        date: '10 days, 2 hours ago',
    },
    {
        id: 5,
        message: 'John Wick commented on one of your updates',
        date: '2 week ago',
    },
    {
        id: 6,
        message: 'John Wick commented on one of your activity comments',
        date: '17 days, 7 hours ago',
    },
    {
        id: 7,
        message: 'John Wick commented on one of your updates',
        date: '19 days, 1 hour ago',
    },
    {
        id: 8,
        message: 'John Wick commented on one of your activity comments',
        date: '3 week ago',
    },
    {
        id: 9,
        message: 'John Wick commented on one of your updates',
        date: '25 days, 3 hours ago',
    },
    {
        id: 10,
        message: 'John Wick commented on one of your activity comments',
        date: '4 week ago',
    },

];

export default function Notifications() {

    return (
        <div className={styles.notificationsContainer}>
            <h2 className={styles.title}>Notifications</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Notification</th>
                        <th>Date Received</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {notifications.map((note) => (
                        <tr key={note.id}>
                            <td><input type="checkbox" /></td>
                            <td>{note.message}</td>
                            <td>{note.date}</td>
                            <td>
                                <button title="View">👁</button>
                                <button title="Delete">🗑</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )

}