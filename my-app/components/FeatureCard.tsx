// components/FeatureCard.tsx
const FeatureCard = ({ title, description, imageSrc }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-5 text-center">
            <img src={imageSrc} alt={title} className="rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FeatureCard;
