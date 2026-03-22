import { useNavigate, useLocation } from 'react-router-dom';

export function useScrollTo() {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollTo = (e, id) => {
        if (e) e.preventDefault();

        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
            return;
        }

        const el = document.getElementById(id);
        if (el) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return scrollTo;
}
