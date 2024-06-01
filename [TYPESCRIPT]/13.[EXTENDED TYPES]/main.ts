type TypeIsNumber<T> = T extends number ? 'yes' : 'no';

type Type1 = TypeIsNumber<number>; // 'yes'
type Type2 = TypeIsNumber<string>; // 'no'

type TypeBrand = 'apple' | 'microsoft' | 'google';
type TypePrice = '$100' | '$200' | '$300';

type TypePhone = `${TypeBrand} & ${TypePrice}`;

const phone: TypePhone = 'apple & $300';
