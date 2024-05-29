import { MenuItem } from '../interfaces';

export default function Card({
  name,
  price,
  ingredients,
  allergens,
}: MenuItem) {
  return (
    <div className="relative max-w-sm rounded overflow-hidden border py-6 px-4">
      <div className="inline-flex font-bold text-md pb-5">
        <h5>{name}</h5>
        <p className="pl-2">{price.toFixed(2)} €</p>
      </div>
      <p className="text-sm text-gray-500 pb-5 lowercase">
        {ingredients.join(', ')}
      </p>
      {allergens.length > 0 && (
        <div className="absolute bottom-3 text-xs tex-gray-300">
          allergeni: {allergens.join(', ')}
        </div>
      )}
    </div>
  );
}
