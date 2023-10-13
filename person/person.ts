namespace $ {

	export class $piterjs_person extends $piterjs_model {

		@ $mol_mem
		secret() {
			
			const priv = $piterjs_domain.secure_private()
			if( priv ) {

				const pub = this.land.unit( this.id(), this.id() )!.data as string
				return $mol_wire_sync( $mol_crypto_secret ).derive( priv, pub )

			} else {

				const priv = this.land.peer().key_private_serial
				const pub = $piterjs_domain.secure_public()
				return $mol_wire_sync( $mol_crypto_secret ).derive( priv, pub )

			}

		}

		@ $mol_mem
		name_real( next?: string, cache?: 'cache' ) {
			$mol_wire_solid()
			if( cache ) return next!

			const secret = this.secret()
			const reg = this.sub( 'name_real', $hyoo_crowd_reg )
			const salt = $mol_charset_encode( this.id() )

			if( next !== undefined ) {
				
				secret.encrypt( $mol_charset_encode( next ), salt )
					.then( closed => {
						reg.value( new Uint8Array( closed ) )
						this.name_real( $mol_mem_cached( ()=> this.name_real() ), 'cache' )
					} )
				return next

			}

			const closed = reg.value() as Uint8Array | string | null
			if( !closed ) return ''
			if( typeof closed === 'string' ) return closed

			return $mol_charset_decode( $mol_wire_sync( secret ).decrypt( closed, salt ) )

		}
		
	}

}
