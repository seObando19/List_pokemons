export interface FetchAllProfileResponse {
    count:number,
    next: null,
    previous: null,
    results: SmallProfile[],
}

export interface SmallProfile {
    name: string,
    url: string
}

export interface PokemonProfile {
    id: string,
    name: string,
    pic: string
    /* weight: string,
    base_experience: string,
    abilities: SmallAbilities[] */
}

export interface SmallAbilities{
    ability: NameAbility[],
    slot: string
}

export interface NameAbility{
    name: string
}