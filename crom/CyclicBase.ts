import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {Cyclic} from "crom_l1_composed/Cyclic";
import {IntraRelationshipConstraintImpl} from "crom_l1_composed/IntraRelationshipConstraintImpl";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class CyclicBase
			extends IntraRelationshipConstraintImpl
			implements Cyclic
			{

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return CyclicBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.CYCLIC__RELATION:
							return this.relation;
					}
					//return this.eGetFromIntraRelationshipConstraint(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
