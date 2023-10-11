namespace $.$$ {
	export class $piterjs_meetup_guests extends $.$piterjs_meetup_guests {
		
		@ $mol_mem
		person_list() {
			return this.meetup().joined_list()
				.filter( $mol_match_text( this.filter(), person => [ person.name_real(), person.id() ] ) )
				.map( person => this.Person( person ) )
		}

		person( person: $piterjs_person ) {
			return person
		}

		@ $mol_mem
		dump_blob() {
			const table = this.meetup().joined_list().map( person => ({
				id: person.id(),
				real_name: person.name_real(),
			}) )
			const text = $mol_csv_serial( table )
			return new $mol_blob( [ text ], { type: 'text/csv' } )
		}
		
	}
}
