namespace $ {
	
	export class $piterjs_model extends $hyoo_meta_model {

		@ $mol_mem
		description_node() {
			return this.sub( 'description', $hyoo_crowd_text )
		}
		@ $mol_mem
		description( next?: string ) {
			return this.description_node().str( next )
		}
		@ $mol_mem
		description_selection( next?: number[] ) {
			return this.description_node().selection( this.land.peer().id, next )
		}

		// @ $mol_mem_key
		// static item< Model extends typeof $piterjs_model >( this : Model , id : string ) {
		// 	const model = new this as InstanceType< Model >
		// 	model.id = $mol_const( $mol_data_string( id ) )
		// 	return model
		// }
		
		// @ $mol_mem
		// static list< Model extends typeof $piterjs_model >( this : Model ) {
		// 	return $mol_data_array(
		// 		id => this.item( id ) as InstanceType< Model >
		// 	)
		// }

		// @ $mol_mem
		// static all< Model extends typeof $piterjs_model >( this : Model ) {
		// 	return this.list()(
		// 		Object.keys( this.data() )
		// 	)
		// }

		// @ $mol_mem
		// static data() {
			
		// 	const tree = $mol_tree.fromString( this.$.$mol_fetch.text( this.uri() ) )
		// 	const json = new $mol_tree({ type : '*' , sub : tree.sub }).toJSON()

		// 	return json

		// }

		// @ $mol_mem
		// data( next? : any ) {
		// 	const Model = this.constructor as typeof $piterjs_model
		// 	return Model.data()[ this.id() ]
		// }

	}

}
