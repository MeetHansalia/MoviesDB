import React, { Fragment } from 'react'

const CastList = ({cast}) => { 
                           
                              
    return (
        <div className="cast-list">
            <h2 className="text-2xl font-semibold my-4 dark:text-white">Cast</h2>
            <div className="flex flex-wrap gap-4">
                {cast.slice(0, 4).map((actor, index) => (
                <div key={index} className="max-w-full md:max-w-xs lg:max-w-xs xl:max-w-xs" >
                    {actor.profile_path ? (
                    <>
                        <img className="w-full h-32 rounded "  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                        <p className="mt-2 text-center dark:text-white">{actor.name}</p>
                    </>
                    ) : (
                    <p className="mt-2 text-center dark:text-white">{actor.name}</p>
                    )}
                </div>
                ))}
            </div>
        </div>  
    );
  
}

export default CastList;