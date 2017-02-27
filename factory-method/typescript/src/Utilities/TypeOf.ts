///Typescript's built-in typeof can only distinguish between primitive types so returns [Object]
///Borrowed from https://www.stevefenton.co.uk/2013/04/obtaining-a-class-name-at-runtime-in-typescript/
export function TypeOf(thing){
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((<any> thing).constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
}
