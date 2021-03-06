import {RelationImpl} from "crom_l1_composed/RelationImpl";
import {Fulfillment} from "crom_l1_composed/Fulfillment";
import {Type} from "crom_l1_composed/Type";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {AbstractRole} from "crom_l1_composed/AbstractRole";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class FulfillmentBase
			extends RelationImpl
			implements Fulfillment
			{
				private _filled:AbstractRole = null;
				get filled():AbstractRole{
				
					return this._filled;
				}
				set filled(value:AbstractRole) {
					let oldvalue = this._filled;
					this._filled = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.FULFILLMENT__FILLED , oldvalue, value));
					}
				}
				private _filler:Type = null;
				get filler():Type{
				
					return this._filler;
				}
				set filler(value:Type) {
					let oldvalue = this._filler;
					this._filler = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.FULFILLMENT__FILLER , oldvalue, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return FulfillmentBase.eStaticClass;
				}
			
			
				public basicSetFiller(newobj:Type, msgs:NotificationChain):NotificationChain {
					let oldobj = this._filler;
					this._filler = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.FULFILLMENT__FILLER, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				public basicSetFilled(newobj:AbstractRole, msgs:NotificationChain):NotificationChain {
					let oldobj = this._filled;
					this._filled = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.FULFILLMENT__FILLED, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.FULFILLMENT__FILLED:
							return this.filled;
						case Crom_l1_composedPackageLiterals.FULFILLMENT__FILLER:
							return this.filler;
					}
					//return this.eGetFromRelation(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.FULFILLMENT__FILLED:
							this.filled = <AbstractRole> newValue;
							return;
						case Crom_l1_composedPackageLiterals.FULFILLMENT__FILLER:
							this.filler = <Type> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
