export default function esCorreoEstudiantec(input) {
    const regex = /[A-Za-z0-9]+@estudiantec\.cr/i;
    return regex.test(input);
}